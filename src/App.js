import React from 'react';
import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import Container from './Components/Container/Container';
import Section from './Components/Section/Section';

import user from './Components/Profile/user.json';
import statistics from './Components/Statistics/statstical-data.json';
import friends from './Components/FriendList/friends.json';
import transactions from './Components/TransactionHistory/transactions.json';

const App = () => {
  return (
    <Container>
      <Section>
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Section>
      <Section>
        <div>
          <Statistics title="upload stats" stats={statistics} />
          <Statistics stats={statistics} />
        </div>
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory transactions={transactions} />
      </Section>
    </Container>
  );
};

export default App;
