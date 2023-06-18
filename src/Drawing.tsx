const HEAD = (
  <div
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
)

const BODY = (
  <div
    style={{
      height: "120px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
)

const RIGHT_HAND = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "130px",
      right: "-90px",
      rotate: "-30deg",
      msTransformOrigin: "left bottom",
    }}
  />
)

const LEFT_HAND = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "130px",
      right: 0,
      rotate: "30deg",
      msTransformOrigin: "right bottom",
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "270px",
      right: "-70px",
      rotate: "60deg",
      msTransformOrigin: "left bottom",
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "270px",
      right: "-20px",
      rotate: "-60deg",
      msTransformOrigin: "right bottom",
    }}
  />
)

const PARTS = [HEAD, BODY, RIGHT_HAND, LEFT_HAND, RIGHT_LEG, LEFT_LEG]

type DrawingProps = {
  numberOfGuesses: number
}

export function Drawing({ numberOfGuesses } :
DrawingProps) {
    return (
        <div style={{ position: "relative" }}>
          {PARTS.slice(0, numberOfGuesses) }
          <div
            style={{
              height: "50px",
              width: "10px",
              background: "black",
              position: "absolute",
              top: 0,
              right: 0
            }}
          />
          <div
            style={{
              height: "10px",
              width: "200px",
              background: "black",
              marginLeft: "120px"
            }}
          />
          <div
            style={{
              height: "400px",
              width: "10px",
              background: "black",
              marginLeft: "120px"
            }}
          />
          <div
            style={{
              height: "10px",
              width: "250px",
              background: "black"
            }}
          />

        </div>
    )
}