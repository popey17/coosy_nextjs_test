'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createPost(id) {
  try {

  } catch (error) {

  }

  revalidatePath('/products')
  redirect(`/products/1`)
}