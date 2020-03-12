import React /*, { useEffect, useState }*/ from 'react';
import { View, Text } from 'react-native';

import { slide } from '../../../../data/slide';
import LikeSlide from './LikeSlide';

interface slide {
  label: string;
  img: string;
  title: string;
  subTitle: string;
}

interface Idata {
  data: slide[];
}

class Like extends React.Component<object, Idata> {
  state = {
    data: slide.data,
  };

  render() {
    const { data } = this.state;
    return (
      <View>
        <View>
          <Text>좋아할 것 같아서</Text>
          <Text>더보기</Text>
        </View>
        <View>
          {data.map(el => {
            return (
              <LikeSlide
                label={el.label}
                img={el.img}
                title={el.title}
                subTitle={el.subTitle}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

// const Like = () => {
//   const [data, setData] = useState<Idata>({ data: slide });

// const Contents = () => {
//   fetch('http://localhost:19002/data/data.json')
//     .then(res => res.json())
//     .then(res => setData({ data: res.data }));
// };

//   useEffect(Contents, []);

//   return (
//     <View>
//       <View>
//         <Text>좋아할 것 같아서</Text>
//         <Text>더보기</Text>
//       </View>
//       <View>
//         {data.map(el => {
//           return (
//             <LikeSlide
//               label={el.label}
//               img={el.img}
//               title={el.title}
//               subTitle={el.subTitle}
//             />
//           );
//         })}
//       </View>
//     </View>
//   );
// };

export default Like;
