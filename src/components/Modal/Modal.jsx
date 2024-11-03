import closeImg from '@/assets/img/close.png'
import Style from './Modal.styles.js'

const Modal = ({ children, closeFunction }) => {
  return (
    <Style.Modal>
      <div className='modal-bg'>
        <div className='modal-content'>
          <button className='modal-close' onClick={() => closeFunction()}>
            <img src={closeImg} alt='close' />
          </button>
          {children}
        </div>
      </div>
    </Style.Modal>
  )
}

export default Modal
