import { connect } from "react-redux"
import { Link, Navigate } from "react-router-dom"

const Account = ({auth}) => {
    if (!auth.uid) return <Navigate to="/signin"/>
    return (
      <div style={{textAlign: "center"}}>
          <h1 style={{fontSize: "200px", margin: "20px 0 0 0"}}><i class="far fa-user-circle"></i></h1>
          <h1 style={{margin: "0"}}>Chika</h1>
          <h2 style={{margin: "0"}}>{auth.email}</h2>
          <br/>
          <button className="btn-change"><Link style={{color:"black"}} to="/">Add Child/Partner</Link></button>
      </div>
    )
  }

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

  export default connect(mapStateToProps)(Account);