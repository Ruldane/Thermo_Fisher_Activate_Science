import React from 'react';
import { Dots, NewRoom, Search } from '../../../svg';
import './style.css';
import Contact from './Contact';

export default function RightHome({ user }) {
  const color = '#65676b';
  return (
    <div className="right_home">
      <div className="heading">Sponsored</div>
      <div className="splitter"></div>
      <div className="contact_wrap">
        <div className="contacts_header">
          <div className="contacts_header_left">Contacts</div>
          <div className="contacts_header_right">
            <div className="contact_circle hover1">
              <NewRoom color={color} />
            </div>
            <div className="contact_circle hover1">
              <Search color={color} />
            </div>
            <div className="contact_circle hover1">
              <Dots color={color} />
            </div>
          </div>
        </div>
        <div className="contacts_list">
          <Contact user={user} />
        </div>
      </div>
    </div>
  );
}
