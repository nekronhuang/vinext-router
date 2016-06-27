namespace go service.app

struct Config {
  1:bool autoplay
  2:i16 tagDuration
  3:bool tagTrack
}

struct MeRes {
  1:i16 status
  2:Config msg
}

service AppService {
  MeRes getMe()
}