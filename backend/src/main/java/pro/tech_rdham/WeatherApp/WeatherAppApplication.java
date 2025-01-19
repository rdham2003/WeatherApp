package pro.tech_rdham.WeatherApp;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WeatherAppApplication {

	public static void main(String[] args) {
//		Dotenv dotenv = Dotenv.load();
//		System.out.println(dotenv.get("API"));

		SpringApplication.run(WeatherAppApplication.class, args);
	}

}
