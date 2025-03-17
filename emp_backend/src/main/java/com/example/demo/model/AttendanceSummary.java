package com.example.demo.model;

public class AttendanceSummary {

    private Long employeeId;
    private long totalPresentDays;
    private double payment;

    public AttendanceSummary(Long employeeId, long totalPresentDays, double payment) {
        this.employeeId = employeeId;
        this.totalPresentDays = totalPresentDays;
        this.payment = payment;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public long getTotalPresentDays() {
        return totalPresentDays;
    }

    public void setTotalPresentDays(long totalPresentDays) {
        this.totalPresentDays = totalPresentDays;
    }

    public double getPayment() {
        return payment;
    }

    public void setPayment(double payment) {
        this.payment = payment;
    }
}
