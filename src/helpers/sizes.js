export default {
  down(size) {
    const sizes = {
      xs: '575.98px',
      md: '991.98px'
    };

    return `@media (max-width: ${sizes[size]})`;
  }
};
