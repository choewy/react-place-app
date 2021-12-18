import { useEffect, useRef } from "react";

const Content = (props) => {
    const { data } = props;
    const mapElement = useRef(null);

    useEffect(() => {
        const map = new window.kakao.maps.Map(mapElement.current, {
            center: new window.kakao.maps.LatLng(data.x, data.y),
            level: 3
        });

        const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(data.x, data.y)
        });

        marker.setMap(map)

        return;
    });

    return (
        <div className="container">
            <div className="map" ref={mapElement} />
            <div className="content">
                <div className="image" style={{ backgroundImage: `url("images/${data.image}")` }} />

                <div className="title">{data.title}</div>
                <div className="address">{data.address}</div>
                <div className="description">
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
};

export default Content;