import React from 'react';
import PropTypes from  'prop-types';

const GuestList = props => 
    <ul>
        {props.guest.map((guest, index) =>
        <li key={index} className="responded">
            <span>{ guest.name }</span>
            <label>
                <input type="checkbox" checked={guest.isConfirmed} /> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
        </li>
        )}
    </ul>

GuestList.propTypes = {
    guest: PropTypes.array.isRequired
}

export default GuestList