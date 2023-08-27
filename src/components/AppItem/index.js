// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="appItem">
      <img className="appImage" src={imageUrl} alt={appName} />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
