import { supabase } from '../../db'
import { Todo } from '../../type'

export async function getTodos() {
  const todos = await supabase.from('todos').select().throwOnError()
  return todos.data as Todo[]
}

export async function addTodo(todo: { task: string; description: string }) {
  const inserted = await supabase.from('todos').insert(todo).select()
  console.log(inserted)
}
