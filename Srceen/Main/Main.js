import React, {Component} from 'react';
import {View} from 'react-native';
import Modal, {ModalContent, ModalTitle} from 'react-native-modals';
import Blog from './Blog/Blog';
import Header from './Header';
import Status from './Status';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  modal() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    let renderData = Object.entries(data);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Header
          press={() => {
            this.modal();
          }}
        />

        <Blog data={renderData} />
        <Modal
          modalTitle={<ModalTitle title="Bạn đang nghĩ gì" />}
          visible={this.state.modal}
          onTouchOutside={() => {
            this.modal();
          }}>
          <ModalContent>
            <Status />
          </ModalContent>
        </Modal>
      </View>
    );
  }
}

let data = {
  0: {
    author: 'Phạm Văn Sậu',
    authorImage:
      'http://mcvideomd1fr.keeng.net/playnow/images/channel/avatar/20190408/84947430634_20190408001343.jpg',
    caption:
      'Mới đây, tuyển thủ đội tuyển Việt Nam Nguyễn Trọng Hùng đã công khai bạn gái Mai Linh. Chàng tiền vệ CLB Thanh Hóa liên tục đăng tải những hình ảnh thân mật với cô nàng hot-girl xứ Thanh.\n' +
      '\n' +
      '          Nguyễn Mai Linh sinh năm 2000 hiện đang là sinh viên nhành Ngôn ngữ Nhật tại ĐH FPT. Hiện tại, cô nàng này đã làm người mẫu ảnh tự do. Mai Linh gây ấn tượng bằng vẻ ngoài xinh xắn đáng yêu, cùng đôi mắt hút hồn.\n' +
      '     ',
    image:
      'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-2-480x600.jpg',
    comment: {
      0: {
        author: 'Phạm Văn Sậu',
        authorImage:
          'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-2-480x600.jpg',
        caption:
          'Gennady Golovkin phản ứng sao khi Oscar De La Hoya thách đấu\n' +
          'Nếu tái đấu, Khabib Nurmagomedov có bắt tay Conor McGregor?',
      },
      1: {
        author: 'Phạm Văn Sậu',
        authorImage:
          'http://mcvideomd1fr.keeng.net/playnow/images/channel/avatar/20190408/84947430634_20190408001343.jpg',
        caption:
          'Gennady Golovkin phản ứng sao khi Oscar De La Hoya thách đấu\n' +
          'Nếu tái đấu, Khabib Nurmagomedov có bắt tay Conor McGregor?',
      },
    },
  },
  1: {
    author: 'Phạm Trọng đại',
    authorImage:
      'http://mcvideomd1fr.keeng.net/playnow/images/channel/avatar/20190408/84947430634_20190408001343.jpg',
    caption:
      'Mới đây, tuyển thủ đội tuyển Việt Nam Nguyễn Trọng Hùng đã công khai bạn gái Mai Linh. Chàng tiền vệ CLB Thanh Hóa liên tục đăng tải những hình ảnh thân mật với cô nàng hot-girl xứ Thanh.\n' +
      '\n' +
      '          Nguyễn Mai Linh sinh năm 2000 hiện đang là sinh viên nhành Ngôn ngữ Nhật tại ĐH FPT. Hiện tại, cô nàng này đã làm người mẫu ảnh tự do. Mai Linh gây ấn tượng bằng vẻ ngoài xinh xắn đáng yêu, cùng đôi mắt hút hồn.\n' +
      '     ',
    image:
      'https://i.pinimg.com/280x280_RS/e2/ba/bb/e2babbe6a54df75dc0ebd1727368892e.jpg',
    comment: {
      0: {
        author: 'Phạm Văn Sậu',
        authorImage:
          'http://mcvideomd1fr.keeng.net/playnow/images/channel/avatar/20190408/84947430634_20190408001343.jpg',
        caption:
          'Gennady Golovkin phản ứng sao khi Oscar De La Hoya thách đấu\n' +
          'Nếu tái đấu, Khabib Nurmagomedov có bắt tay Conor McGregor?',
      },
      1: {
        author: 'Phạm Văn Sậu',
        authorImage:
          'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg',
        caption:
          'Gennady Golovkin phản ứng sao khi Oscar De La Hoya thách đấu\n' +
          'Nếu tái đấu, Khabib Nurmagomedov có bắt tay Conor McGregor?',
      },
    },
  },
};
