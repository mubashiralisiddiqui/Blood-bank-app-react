
import Login from '../components/plogin';
import {names} from "../actions/action"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"

function mapStateToProps(state)
{
    return {

    }
}

const mapDispatchToProps = (dispatch)=>({
    login: bindActionCreators(names,dispatch)
})

const Main = connect(mapStateToProps,mapDispatchToProps)(Login)

export default Main