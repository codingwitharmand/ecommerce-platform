FROM maven:3.9.9-amazoncorretto

WORKDIR /app

COPY . .

RUN mvn clean package

FROM maven:3.8.1-openjdk-17 AS build

WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline -B

COPY src src

RUN mvn clean package

FROM openjdk:17-jdk-slim AS run

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]