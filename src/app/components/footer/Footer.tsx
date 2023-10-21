import FacebookIcon from '../icons/webs/FacebookIcon'
import InstagramIcon from '../icons/webs/InstagramIcon'
import XIcon from '../icons/webs/XIcon'

const Footer = () => {
  return (
    <footer className='pb-5 m-5 border-t-2 dark:border-gray-400 border-gray-800 mt-auto'>
      <p className='text-center mb-2'>Redes Sociales</p>
      <ul className='px-5 flex flex-col sm:gap-2 gap-4 items-center sm:flex-row sm:justify-around sm:items-center'>
        <li>
          <a
            href='https://www.instagram.com/vjaviertaype'
            className='flex flex-row justify-center items-center gap-2 hover:underline'
            target='_blank'
            rel='noreferrer'>
            <InstagramIcon /> vjaviertaype
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/vjaviertaype'
            className='flex flex-row justify-center items-center gap-2 hover:underline'
            target='_blank'
            rel='noreferrer'>
            <FacebookIcon /> Victor Javier
          </a>
        </li>
        <li>
          <a
            href='https://x.com/vjaviertaype'
            className='flex flex-row justify-center items-center gap-2 hover:underline'
            target='_blank'
            rel='noreferrer'>
            <XIcon /> vjaviertaype
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
