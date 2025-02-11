package com.practice.ems.service.impl;

import com.practice.ems.dto.EmployeeDto;
import com.practice.ems.entity.Employee;
import com.practice.ems.exception.ResourceNotFoundException;
import com.practice.ems.repository.EmployeeRepository;
import com.practice.ems.service.EmployeeService;
import com.practice.ems.mapper.EmployeeMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    public EmployeeDto getEmployeeById(Long id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with the given id:" + id));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
