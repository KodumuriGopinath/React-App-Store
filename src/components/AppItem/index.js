// Write your code here
import './index.css'

const AppItem = props => {
  const {appListDetails} = props
  const {imageUrl, appName} = appListDetails

  return (
    <li className="app-card-item">
      <>
        <img src={imageUrl} alt={appName} className="app-image" />
        <p>{appName}</p>
      </>
    </li>
  )
}

export default AppItem
