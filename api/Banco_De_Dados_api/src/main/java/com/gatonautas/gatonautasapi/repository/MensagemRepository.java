package com.gatonautas.gatonautasapi.repository;

import com.gatonautas.gatonautasapi.model.Mensagens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MensagemRepository  extends JpaRepository<Mensagens, Long> {

}
