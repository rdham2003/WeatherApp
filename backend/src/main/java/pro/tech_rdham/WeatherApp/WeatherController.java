package pro.tech_rdham.WeatherApp;

import io.github.cdimascio.dotenv.Dotenv;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/weather")
public class WeatherController {
    @PostMapping("/data")
    public ResponseEntity<Weather> weatherData(@RequestParam("city") String city,
                                               @RequestParam(value = "state", defaultValue = "") String state,
                                               @RequestParam("country") String country){
        Dotenv dotenv = Dotenv.load();
        StringBuilder sb = new StringBuilder();
        StringBuilder location = new StringBuilder();
        String newCont = country.replace(" ", "");
        if (state.compareTo("") == 0){
            sb.append("http://api.openweathermap.org/data/2.5/weather?q=");
            sb.append(city);
            sb.append(",");
            sb.append(newCont);
            sb.append("&appid=");
            sb.append(dotenv.get("API"));
            location.append(city);
            location.append(", ");
            location.append(country);
        }
        else{
            sb.append("http://api.openweathermap.org/data/2.5/weather?q=");
            sb.append(city);
            sb.append(",");
            sb.append(state);
            sb.append(",");
            sb.append(newCont);
            sb.append("&appid=");
            sb.append(dotenv.get("API"));
            location.append(city);
            location.append(", ");
            location.append(state);
            location.append(", ");
            location.append(country);
        }
        String url = sb.toString();
        System.out.println(url);

        try{
            URL call = new URL(url);

            HttpURLConnection conn = (HttpURLConnection) call.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();

            StringBuilder jobData;

            if (conn.getResponseCode() != 200){
                return null;
            }
            else{
                jobData = new StringBuilder();
                Scanner scanner = new Scanner(call.openStream());

                while (scanner.hasNext()){
                    jobData.append(scanner.nextLine());
                }
                scanner.close();
//                System.out.println(jobData);
            }

            JSONObject weatherData = new JSONObject(jobData.toString());
            System.out.println(weatherData);
            BigDecimal temp = (BigDecimal) weatherData.getJSONObject("main").get("temp");
            int code = (int) weatherData.getJSONArray("weather").getJSONObject(0).get("id");
            BigDecimal feels_like = (BigDecimal) weatherData.getJSONObject("main").get("feels_like");
            int humidity = (int) weatherData.getJSONObject("main").get("humidity");
            BigDecimal wind_speed = (BigDecimal) weatherData.getJSONObject("wind").get("speed");
            int wind_direction = (int) weatherData.getJSONObject("wind").get("deg");
            int timezone = (int) weatherData.get("timezone");
            String weatherReport = (String) weatherData.getJSONArray("weather").getJSONObject(0).get("main");
            System.out.println(temp);
            System.out.println(code);
            System.out.println(wind_speed);
            System.out.println(feels_like);
            System.out.println(humidity);
            System.out.println(wind_direction);
            Weather weather = new Weather(location.toString(), weatherReport, temp.doubleValue(), code, feels_like.doubleValue(), humidity, wind_speed.doubleValue(), wind_direction, timezone);
            return ResponseEntity.ok(weather);
        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
