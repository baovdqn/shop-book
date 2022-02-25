import React, {useState} from 'react';

import Menu from '../components/Menu';

import { Col, Row, Button } from 'reactstrap'
import './ItemProduct.css'

const ItemProduct = (props) => {
    const [data] = useState(
        { "id": 1, img_product: "http://dummyimage.com/180x250.jpg/ff4444/ffffff",
         "name_product": "Lược Sử Vạn Vật", "author": "Caitrin O'Brien", "price": 508511,
        "description": "Lược sử vạn vật là cuốn sách phổ biến khoa học trình bày một cách ngắn gọn lịch sử nghiên cứu khoa học tự nhiên,những thành tựu khoa học trong các lĩnh vực khoa học tự nhiên chính: vật lý,hóa học,sinh học, địa chất,thiên văn...với nhiều tên tuổi, giai thoại và sự thật.Với cuốn sách này,người đọc sẽ biết được những giới hạn trong tri thức của con người về vũ trụ và cả về chính trái đất.Đây là cuốn sách khoa học phổ thông bán chạy nhất nước Anh năm 2005 với hơn 300.000 bản in. Nhà phê bình người Anh,Craig Brown thậm chí đã nhận xét rằng tác phẩm này xứng đáng bán được 500.000.000.000 cuốn(theo cách nói của chính Bryson, bằng với số proton có trong một dấu chấm câu).William McGuire Bill Bryson,tác giả cuốn sách Lược sử vạn vật - A Short History of Nearly Everything sinh năm 1951,là tác giả nổi tiếng hàng đầu trong thể loại non - fiction ở Bắc Mỹ,với vô số người hâm mộ trên khắp thế giới"
        }
    );
    return (
        <Col md='9'>
            <Menu></Menu>
        <div className='ItemProduct mb-3'>
            <Row className='pt-3'>
                <Col md='4'>
                    <img  className='m-auto' src={data.img_product} alt={data.id}></img>
                </Col>
                <Col md='8'>
                    <h3>{data.name_product}</h3>
                    <p>Giá bán: {data.price}</p>
                    <p>Trạng thái: Còn hàng</p>
                    <Button color="info">Thêm vào giỏ hàng</Button>
                </Col>
            </Row>
            <Row className='pt-3'>
                <div className='ItemProduct-description'>
                <h4>Mô tả</h4>
                <p>
                    {data.description}
                </p>

                </div>
            </Row>

        </div>
        </Col>
    );
}

export default ItemProduct;
