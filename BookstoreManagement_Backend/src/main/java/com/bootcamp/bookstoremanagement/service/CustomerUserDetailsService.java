package com.bootcamp.bookstoremanagement.service;

import com.bootcamp.bookstoremanagement.entity.User;
import com.bootcamp.bookstoremanagement.repository.ILoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomerUserDetailsService implements UserDetailsService {
	@Autowired
	ILoginRepository loginRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = loginRepository.findByEmail(username);
		if(user == null) {
			throw new UsernameNotFoundException("User Not Found");
		}
		return new CustomerUserDetails(user);
	}

}
