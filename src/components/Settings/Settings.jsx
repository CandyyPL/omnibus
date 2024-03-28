import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { supabase } from '@/supa/client'

const schema = z.object({
  newPassword: z.coerce.string().min(8, { message: 'Hasło musi mieć przynajmniej 8 znaków' }),
})

const Settings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const changePassword = async (creds) => {
    const { data, error } = await supabase.auth.updateUser({ password: creds.newPassword })

    if (error) {
      console.log(error)
      return
    }

    console.log(data)
  }

  return (
    <div className='settings-wrapper'>
      <form onSubmit={handleSubmit(changePassword)}>
        <input
          type='password'
          placeholder='Nowe hasło'
          {...register('newPassword', { required: true })}
        />
        {errors.newPassword?.message && <p>{errors.newPassword.message}</p>}
        <button type='submit'>Zmień hasło</button>
      </form>
    </div>
  )
}

export default Settings
