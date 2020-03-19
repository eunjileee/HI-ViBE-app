import * as React from 'react';
import { FlatList, ScrollView, Animated, Easing } from 'react-native';
import styled from 'styled-components/native';

interface slide {
  label: string;
  img: string;
  title: string;
  subTitle: string;
}

interface data {
  data: slide[];
}

const DATA = [
  {
    label: '지붕뚫고 급상승',
    img:
      'https://musicmeta-phinf.pstatic.net/video/000/257/257902.jpg?type=ac640_360&v=20191114175910',
    title: '급상승 차트 1위',
    subTitle: 'ITZY(있지): WANNABE',
  },
  {
    label: '뮤직비디오',
    img:
      'https://musicmeta-phinf.pstatic.net/video/000/246/246643.jpg?type=ac640_360&v=20190212175904',
    title: 'Stupid Love',
    subTitle: 'Lady Gaga',
  },
  {
    label: '#Mood',
    img:
      'https://musicmeta-phinf.pstatic.net/video/000/254/254563.jpg?type=ac640_360&v=20190823175910',
    title: 'Sugar & Honey',
    subTitle: '감미롭고 꿈결 같은 슬로우 잼 뮤직',
  },
];

const TodaySlide = ({ label, img, title, subTitle }) => {
  return (
    <SlideContainer>
      <Label>{label}</Label>
      <Img source={{ uri: `${img}` }} />
      <TrackTitle>{title}</TrackTitle>
      <SubTitle>{subTitle}</SubTitle>
    </SlideContainer>
  );
};

class Today extends React.Component {
  state = {
    value: new Animated.Value(0),
  };

  // animate = easing => {
  //   Animated.timing(this.state.value, {
  //     toValue: 1,
  //     duration: 1000,
  //     easing: Easing.ease,
  //   }).start();
  // };

  onScroll = e => {
    Animated.event([
      {
        nativeEvent: {
          contentOffset: {
            x: e.nativeEvent.contentOffset.x,
          },
        },
      },
    ]);
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <TitleBar>
            <Title>오늘의 VIBE</Title>
            <More />
          </TitleBar>
          <Animated.FlatList
            data={DATA}
            horizontal
            scrollEventThrottle={16}
            onScroll={this.onScroll}
            renderItem={({ item }) => (
              <TodaySlide
                label={item.label}
                img={item.img}
                title={item.title}
                subTitle={item.subTitle}
              />
            )}
            keyExtractor={item => item.title}
          />
        </Container>
      </ScrollView>
    );
  }
}

export default Today;

// fixed
const Container = styled.View`
  flex: 2;
  margin-top: 10%;
`;

const TitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 3%;
  margin-bottom: 7%;
`;

const Title = styled.Text`
  font-size: 30;
  font-weight: bold;
  color: white;
`;

const More = styled.Text`
  font-size: 14px;
  color: gray;
`;

// Contents
const SlideContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: #1e1e1e;
  margin: 0 10px 45px 0;
`;

const Label = styled.Text`
  font-size: 16px;
  color: #ff0050;
`;

const Img = styled.Image`
  width: 360px;
  height: 180px;
  margin: 10px 0 15px 0;
`;

const TrackTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

const SubTitle = styled.Text`
  margin: 3px 0 25px;
  font-size: 16px;
  color: gray;
`;

// export const Today = () => {
//   const [data, setData] = useState<Idata>({ data: slide });

//   // const Contents = () => {
//   //   fetch('http://localhost:19002/data/data.json')
//   //     .then(res => res.json())
//   //     .then(res => setData({ data: res.data }));
//   // };

//   // useEffect(Contents, []);

//   return (
//     <TodayContainer>
//       <View>
//         <TodayTitle>오늘의 VIBE</TodayTitle>
//       </View>
//       <View>
//         {data.map(el => {
//           return (
//             <TodaySlide
//               label={el.label}
//               img={el.img}
//               title={el.title}
//               subTitle={el.subTitle}
//             />
//           );
//         })}
//       </View>
//     </TodayContainer>
//   );
// };
