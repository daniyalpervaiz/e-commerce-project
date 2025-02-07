export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skWWjIjeQt91uNBtKD6HrnTN2O9KCOSppCF03PslHsJT96fqrNBYIu9KVOc0Lz9VsCcvZ0C9XOJgFoR0CYaXaKGifIEh3O5WJVm0DHhQT17v7IpCcOQ89nL009Ksi1IybzQJwsEubXto1kvxm7uRtiuACHYO7yux3y9cQdzG7A7g7VsLIpk6",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
