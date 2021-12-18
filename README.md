# react-place-app

React로 프론트엔드를 공부하는 중에 딱히 만들고 싶은 사이트라던지, 프로젝트가 생각나지 않아서 스파르타 코딩 클럽의 미션을 수행해보았다. 마침 추석 특집으로 무료 강의를 진행 중이었는데, `html`, `css` 기초 강의였고, 코드를 따라쳐서 스파르타 코딩 클럽에 코드를 업로드하는 것이 미션이였다. React에 조금 익숙해진 터라 React로 이를 구현하였고, GitHub Pages에 업로드 하는 방식으로 미션을 수행하였다.

- https://choewy.github.io/react-place-app

## 의존성

```json
{
    "dependencies": {
        "@testing-library/jest-dom": "^5.11.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^12.1.10",
        "gh-pages": "^3.2.3",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-router-dom": "^5.3.0",
        "react-scripts": "4.0.3",
        "web-vitals": "^1.0.1"
	}
}
```

## 카카오 맵 API 설정

카카오 맵 API를 사용하기 위해 API 키를 발급받아야 한다. 구글링해보면 자세히 설명된 글이 많기 때문에 별도의 설명을 생략한다. API를 사용하기 위해 `public/index.html` 파일 `<head>`에 JavaScript 코드를 삽입한다.

```html
<head>
    <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=535068688f1a8bca1c21a9445ede0a89"></script>
</head>
```

이제 웹 페이지 전역에 선언한 API를 React에서 사용할 수 있도록 `useEffect` 훅을 사용하여 불러오도록 한다. 특정 위치를 맵에 표시하기 위해서는 x, y 좌표가 필요한데, 아래 코드에서 볼 수 있는 `data.x`, `data.y`는 구글 지도에서 해당 위치를 검색하면 확인할 수 있다.(이 정보를 `src/data.json`에 별도로 저장하여 `data` 변수로 사용하였다.) 

```js
/* src/component/Content.js */

const Content = (props) => {
    const {data} = props;
	const mapElement = useRef(null);
    useEffect(() => {
        const map = new window.kakao.maps.Map(mapElement.current, {
            center: new window.kakao.maps.LatLng(data.x, data.y),
            level: 3
        });

        const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(data.x, data.y)
        });

        marker.setMap(map);

        return;
    });
    // ...
};
```

## 느낀점

강의 자체는 초급자를 위한 강의였기 때문에 보여지는 결과물과 일부 CSS 정도만 참고하였다. 매우 간단한 프로젝트였음에도 불구하고, 카카오 맵 API를 사용하는 방법을 배웠다는 점에서 매우 뜻깊은 미션이었다고 생각한다. 무료로 강의를 제공해준 스파르타 코딩 클럽에 다시 한 번 감사를 표한다.

