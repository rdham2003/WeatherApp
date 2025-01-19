package pro.tech_rdham.WeatherApp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class Weather {
    private String location;
    private String weather;
    private double temperature;
    private int code;
    private double feels_like;
    private int humidity;
    private double wind_speed;
    private int wind_direction;
    private int timezone;
}
