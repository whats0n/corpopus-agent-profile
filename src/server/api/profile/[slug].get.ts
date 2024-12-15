import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { ProfileContent } from '~/types/profile'

export default defineEventHandler(async (event): Promise<ProfileContent> => {
  const slug = getRouterParam(event, 'slug')

  try {
    const filePath = join('src/content/profile', `${slug}.json`)

    if (!existsSync(filePath)) throw new Error('Not found')

    const content = await readFile(filePath, 'utf-8')

    const data = JSON.parse(content)

    return data
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: `Profile "${slug}" not found.`,
    })
  }
})
