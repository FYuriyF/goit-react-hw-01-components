import { Profile } from './Profile/Profile';
import user from 'data/user.json';
import { Container, SectionWrapper } from './App.styled';
import { Global } from '@emotion/react';
import { globalStyles } from 'constants/globalStyles';

export const App = () => {
  return (
    <Container>
      <Global styles={globalStyles} />
      <SectionWrapper>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </SectionWrapper>
    </Container>
  );
};

//  <Profile
//    username={user.username}
//    tag={user.tag}
//    location={user.location}
//    avatar={user.avatar}
//    stats={user.stats}
//  />;
