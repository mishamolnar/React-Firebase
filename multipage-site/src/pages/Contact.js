import { useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Contact us, {name }</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Reiciendis dignissimos aliquam ex voluptas expedita omnis 
        repellendus labore earum magni quam!</p>
    </div>
  )
}
