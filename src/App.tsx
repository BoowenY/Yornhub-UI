import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={(e) => {e.preventDefault();alert(123)}}>Default Button</Button>
        <Button btnType={ButtonType.Secondary}>Secondary Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary Large Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Danger Large Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary Small Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Danger Small Button</Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com" target="blank">Link Button Disabled</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">Link Button</Button>
        <Button btnType={ButtonType.Secondary}>Porn</Button>
        <Button btnType={ButtonType.Primary}>Hub</Button>
        <Button btnType={ButtonType.Secondary}>上传</Button>
        <Button btnType={ButtonType.Primary}>★升级</Button>
      </header>
    </div>
  );
}

export default App;
