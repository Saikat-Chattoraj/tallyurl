import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
	const res = await fetch(url)
	const data = await res.json()

	if (res.status !== 200) {
		throw new Error(data.message)
	}
	return data
}

const RedirectTo = async (url) => {
	const router = useRouter()
	router.replace(url)
}

export default function GetUrl() {
	const { query } = useRouter()
	const { data, error } = useSWR(
		() => query.surl && `/api/v1/go/${query.surl}`,
		fetcher
	)

	if (error) return <div>{error.message}</div>
	if (!data) return <div>Loading...</div>
	if (data.message) return <div>{data.message}</div>
	try {
		if (data.data && data.data.longUrl) { RedirectTo(data.data.longUrl) }
		else {RedirectTo('/404')}
	}
	catch (e) {
		return (
			<>
				"Fatal error" {e.message}
			</>
		)
	}
	finally {
		return (
			<>
			</>
		)
	}
}