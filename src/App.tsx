import { useEffect, useState } from 'react'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { FieldError, useForm } from 'react-hook-form'
import { addTodo, getTodos } from './features/todo/api'
import { Todo } from './type'
import Input from './components/Input'

function App() {
  useEffect(() => {
    document.body.style.background =
      'linear-gradient(90deg, rgba(2,181,255,1) 11%, rgba(57,146,222,1) 46%, rgba(42,104,237,1) 73%)'
  })
  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    task: string
    description: string
  }>()

  const { data, isLoading, error, isError } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  const { mutate, isLoading: isAdding } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  async function HandleAdd(data: { task: string; description: string }) {
    mutate(data)
  }

  return (
    <>
      <div
        style={{
          display: 'inline-grid',
          gridTemplateColumns: '40px 1fr',
          background: 'rgba(0,0,0, .15)',
          padding: '5px',
          borderRadius: '10px',
        }}
      >
        {' '}
        <span
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'Quicksand',
          }}
        >
          Task
        </span>
        <Input onChange={() => console.log('Inamo')} />
        <span
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'Quicksand',
          }}
        >
          Desc
        </span>
        <Input onChange={() => console.log('Inamo')} />
      </div>

      {isError ? (
        <p>{error.message}</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        data?.map((todo: Todo) => (
          <div key={todo.id}>
            <h3>{todo.task}</h3>
            <p>{todo.description}</p>
          </div>
        ))
      )}
    </>
  )
}

export default App
