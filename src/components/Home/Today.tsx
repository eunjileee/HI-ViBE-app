import * as React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
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
      <Line />
    </SlideContainer>
  );
};

const Today = () => {
  return (
    <Container>
      <TitleBar>
        <Title>오늘의 VIBE</Title>
        <More />
      </TitleBar>
      <SafeAreaView>
        <FlatList
          data={DATA}
          horizontal
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
      </SafeAreaView>
      <Line />
    </Container>
  );
};

export default Today;

// fixed
const Container = styled.View`
  flex: 1;
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
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 10px;
`;

const Label = styled.Text`
  font-size: 14px;
  color: #ff0050;
`;

const Img = styled.Image`
  width: 350px;
  height: 230px;
  margin-top: 10px;
`;

const TrackTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  color: gray;
`;

const Line = styled.View`
  border-color: gray;
  border-style: solid;
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
