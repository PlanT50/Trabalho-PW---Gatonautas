package com.gatonautas.gatonautasapi.controller;

import com.gatonautas.gatonautasapi.model.Mensagens;
import com.gatonautas.gatonautasapi.repository.MensagemRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/mensagens")
public class MensagemController {

    private final MensagemRepository repository;

    public MensagemController(MensagemRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Mensagens> listarTodas() {
        return repository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> enviarMensagem(@RequestBody Map<String, String> body) {
        String nome     = body.get("nome");
        String planeta  = body.get("planeta");
        String tipo     = body.get("tipo");
        String mensagem = body.get("mensagem");

        if (nome == null || planeta == null || tipo == null || mensagem == null) {
            return ResponseEntity.badRequest().body(Map.of("erro", "Todos os campos são obrigatórios"));
        }

        return ResponseEntity.ok(repository.save(new Mensagens(nome, planeta, tipo, mensagem)));
    }

    @DeleteMapping
    public ResponseEntity<?> limparTodas() {
        repository.deleteAll();
        return ResponseEntity.ok(Map.of("mensagem", "Todas as mensagens foram removidas"));
    }
}