import { PageHeader, Button } from 'antd';
import { useMoralis } from "react-moralis";
import '../App.css'

const Header = () => {
  const { authenticate, isAuthenticated } = useMoralis();
  if (isAuthenticated){
    return(
      <h1>Login</h1>
    )
    
  }
  return(
    <div className="site-page-header-ghost-wrapper user-schema" style={{width:'80%'}}>
      <PageHeader
        ghost={false}
        extra={[
         <Button key="1" className='profile-button' style={{width:'100%', color:"white"}} onClick={() => authenticate()}>
          Login with Metamask
          </Button>
        ]}>
      </PageHeader>
    </div>
  )
}

export default Header;