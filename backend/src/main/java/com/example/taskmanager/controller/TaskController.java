package com.example.taskmanager.controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @GetMapping
    public String getTasks() {
        return "Task Manager Backend Working!";
    }
}
