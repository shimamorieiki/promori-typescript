import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => (
    <ul>
        <li><Link to='/'>タイムライン</Link></li>
        <li><Link to='/Notice'>Notice</Link></li>
    </ul>
)

export default Sidebar