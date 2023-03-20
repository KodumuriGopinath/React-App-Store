// Write your code here
import './index.css'

const TabItem = props => {
  const {tabListDetails, updateTabId, isActiveSate} = props
  const {displayText, tabId} = tabListDetails

  const onClickTabItem = () => {
    updateTabId(tabId)
  }

  const activeTabIdClassName = isActiveSate ? 'active-class' : ''

  return (
    <li className="display-text">
      <button
        type="button"
        className={`button ${activeTabIdClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
