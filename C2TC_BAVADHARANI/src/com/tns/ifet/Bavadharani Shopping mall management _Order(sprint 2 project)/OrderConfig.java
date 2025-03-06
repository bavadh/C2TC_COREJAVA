package com.mall.shopping_order;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class OrderConfig implements WebMvcConfigurer {

    @Bean
    public OrderService orderService(OrderRepository orderRepository) {
        return new OrderService(orderRepository);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/orders/**")
		.allowed("GET",Origins("https://localhost:3000");
                .allowedMethods("GET", "POST", "PUT", "DELETE");
		.allowedHeaders("*")
		.allowCredentials(true);
    }
}