import { zodResolver } from '@hookform/resolvers/zod'
import Topbar from '@/components/Topbar/Topbar.jsx'
import { useForm } from 'react-hook-form'
import { supabase } from '@/supa/client'
import Style from './Settings.styles.js'
import { z } from 'zod'

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
    <Style.SettingsWrapper>
      <Topbar title='USTAWIENIA' />
      <div className='settings-content'>
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
    </Style.SettingsWrapper>
  )
}

export default Settings
