## 컴포넌트 설계 시 고려했던 부분

---

1. 지금은 하나의 페이지만 UI가 완성되었지만, 여러 페이지로 확장될 가능성을 고려했습니다.

    ⇒ 재사용성 고려

    ⇒ 페이지나 컴포넌트가 많아져도 폴더 구조 규칙에 새로운 규칙을 추가할 필요가 없습니다. (아마)

2. 재사용성

    1. 과제 설명에서 재사용성을 강조해서, 많이 고민했습니다.
    2. 재사용성은 다른 사람이 아무런 정보 없이도 사용할 수 있을 때 극대화된다고 생각해서 필요한 props만 줄 수 있도록 설계하려 했습니다.
    3. 반복되는 컴포넌트는 최대한 컴포넌트화하려고 했습니다.
        1. 버튼
        2. Advertisement
        3. CarCard

    ⇒ 재사용성 고려

    ⇒ 페이지나 컴포넌트가 많아져도 폴더구조 규칙에 새로운 규칙을 추가하지 않아도 됨

## 폴더구조

---

|- public

|- | - fonts (폰트 저장)

|- | - icons (svg 아이콘 저장)

|- | - images (이미지 저장)

|- src

|- Components

|- | - Common ( 범용 컴포넌트 )

|- | - Rent ( Rent 관련 컴포넌트 )

|- Containers (Components 들의 조합)

|- | - Common ( 범용 컨테이너 )

|- | - Rent ( Rent 관련 컨테이너 )

|- Pages ( Containers 들의 조합, 페이지 )

|- data ( json data 저장 )

|- styles ( styled-components 관련 내용 저장 )

|- | - assets ( 태그 )

|- | - theme.js ( fontSize, color 저장 )

## 설계

---

처음 보는 사람도 쉽게 프로젝트 구조를 알 수 있어야 한다고 생각했기에 아래와 같은 설계 규칙을 정했습니다.

1. src
    - src의 하위의 최상위 폴더는 Components, Containers, Pages로 구성하고 있으며, 이를 통해 사용자는 프로젝트가 Components, Containers, Pages로 구성되어 있음을 알 수 있습니다.
2. Components, Containers
    - Components, Containers 하위에는 각각 Common폴더와 페이지 관련 폴더들로 구성하였습니다. 해당 컴포넌트가 어디에서 사용된 것인지 명시되는 효과를 기대하며 설계하였습니다.
3. Naming Convention
    - Components, Containers, Pages 하위의 파일 이름은 페이지 이름으로 시작합니다. 예를들면, RentPage와 관련 있는 Components, Containers들은 RentAppointment.js, RentAppointmentContainer.js 로 명명하였습니다. 이름 중복 가능성 배제를 위해 해당 Naming Convention을 지정하였습니다.
    - icon은 띄어쓰기는 “-”로 처리하였으며, 색은 이름 제일 뒤에 “\_color”를 붙이는 것으로 처리하였습니다.

## 컴포넌트 재사용성 평가

---

10점 만점으로 평가

### CarCard

-   point: 8
-   name, type, image, fuelCapacity, gearType, seats, isLiked, originalPrice, salePrice 를 props로 받아옴
-   외부로 부터 받아오는 data 형식이 달라지면 해당 컴포넌트를 수정해야 할 위험이 있음
-   그 위험을 제외 하면, 별다른 수정 없이 사용할 수 있어 재사용성 높다고 판단

### Dropdown

-   point: 10
-   label, options를 props로 받아옴
-   선택 전 텍스트와 선택 옵션을 커스텀 할 수 있어 재사용성 높다고 판단

### Logo

-   point: 10
-   props 없어서 그냥 import 하기만 하면 됨
-   로고를 바꿔도 해당 컴포넌트만 변경하면 되므로 재사용성 높다고 판단

### LongSquareBtn

-   point: 8
-   btnWidth, text, back, move를 props로 받아옴
-   필요할 때마다 다른 width, text, backgroun-color, navigator를 사용할 수 있어 재사용성 뿐만 아니라 활용도도 높을 것이라 판단
-   move 처리가 안되는 컴포넌트가 1개 있는데 원인을 모르겠음

### RentAdvertisement

-   point: 2
-   pattern, image를 props로 받아옴
-   pattern에 따라 배경 패턴, 컴포넌트 안 내용이 달라지지만, 고정된 내용이라 사용자가 컴포넌트 외부에서 커스텀할 수는 없음

### RentAppointment

-   point: 2
-   pick을 props로 받아옴
-   pick에 따라 pick-up, drop-off의 여부를 결정할 수 있음. 해당 내용도 고정된 내용이라 사용자가 외부에서 컴포넌트를 커스텀 할 수는 없음
-   수정방향 ⇒ RentAppointment안의 location, date, time dropdown 들을 컴포넌트화 시키면 재사용성 높아질 수 있을 것 같음

## 컴포넌트 설계 시 어려웠던 점

---

-   어떤 것을 컴포넌트화 할지 결정하는 것이 어려웠음. 유지보수가 용이하도록 하기 위해 컴포넌트화 한다고 알고 있는데, 내가 만든 컴포넌트들이 유지보수가 용이할 것 이란 확신이 별로 안들었음

-   css로 패턴 만드는 부분이 어려웠음. 혼자선 어려워서 결국 gpt와 외부 사이트의 힘을 빌려 해당 디자인을 구현함
