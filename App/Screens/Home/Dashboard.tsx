import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Dashboard(props) {

    // const dispatch = useDispatch()

    // const {
    // } = useSelector(state => state.shared)

    const [state, setState] = useState(null)

    useEffect(() => {
    }, [])

    return (
        <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: '#000', fontSize: 25, fontWeight: 'bold' }}>Dashboard</span>
        </div>
    )
}

export default Dashboard