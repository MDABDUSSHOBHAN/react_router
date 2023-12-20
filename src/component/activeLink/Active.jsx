import { NavLink } from 'react-router-dom';
import './active.css'

const Active = ({to,children}) => {
    return (
       

        <NavLink
  to={to}
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
 {children}
</NavLink>
    );
};

export default Active;