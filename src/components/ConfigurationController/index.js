// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onchangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="bg">
          <div className="configuration-card">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-container">
              <div className="checkbox-input">
                <input
                  type="checkbox"
                  id="content"
                  onChange={onchangeShowContent}
                  checked={showContent}
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
              </div>
              <div className="checkbox-input">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  onChange={onChangeShowLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="label-text">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-input">
                <input
                  type="checkbox"
                  id="rightNavbar"
                  onChange={onChangeShowRightNavbar}
                  checked={showRightNavbar}
                />
                <label htmlFor="rightNavbar" className="label-text">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
