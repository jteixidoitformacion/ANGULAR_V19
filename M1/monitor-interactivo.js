`;
} catch (error) {
contenedorResultado.innerHTML = `
<div style="border: 1px solid #DC2626; background: #FEF2F2; padding: 12px; border-radius: 6px;">
<p style="margin: 0; color: #991B1B; font-weight: bold;">Error al consultar telemetria :</p>
<p style="margin: 4px 0 0; font-size: 12px; color: #B91C1C;">${error.message}</p>
</div>
`;
}
});
