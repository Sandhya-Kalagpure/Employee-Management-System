package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.EmployeeModel;
import com.example.demo.repository.EmployeeRepository;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<EmployeeModel> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public EmployeeModel getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id " + id));
    }

    public EmployeeModel addEmployee(EmployeeModel employee) {
        return employeeRepository.save(employee);
    }

    public EmployeeModel updateEmployee(Long id, EmployeeModel employee) {
        if (employeeRepository.existsById(id)) {
            employee.setId(id);
            return employeeRepository.save(employee);
        } else {
            throw new RuntimeException("Employee not found with id " + id);
        }
    }

    public void deleteEmployee(Long id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
        } else {
            throw new RuntimeException("Employee not found with id " + id);
        }
    }
}
