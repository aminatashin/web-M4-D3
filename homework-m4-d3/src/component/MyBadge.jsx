import { Badge } from 'react-bootstrap';
import React from 'react';


const MyBadge = (props)=>(
    <Badge  variant={props.badgeStyle} >{props.textInside}</Badge> 
    
)
export default MyBadge



