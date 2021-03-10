export type Method = "GET" | "POST" | "DELETE" | "HEAD" | "PATCH" | "PUT" | "OPTIONS" | "TRACE" | "CONNECT" | "SCHEDULE"

export namespace Method {
	export const types = ["GET", "POST", "DELETE", "HEAD", "PATCH", "PUT", "OPTIONS", "TRACE", "CONNECT", "SCHEDULE"]
	export function is(value: Method | any): value is Method {
		return types.some(m => m == value)
	}
}
